import React from 'react';

/**
 * 懒加载组件
 * @param path
 */
export default function lazyComponent(path = '') {

  return class LazyComponent extends React.Component {

    state = {
      child: null,
    };

    async componentDidMount() {
      try {
        const child = await import('../../pages/' + path);
        this.setState({
          child: child.default,
        });
      } catch (e) {
        console.error('lazyComponent error:', e);
      }
    }

    render() {
      const { child } = this.state;
      if (child) {
        const Com = child;
        return <Com {...this.props} />;
      }
      return (
        <div>
          加载中
        </div>
      );

    }

  };

}

// export default function lazyComponent(path) {
//
//   let Com = null;
//
//   return () => {
//
//     const [hasCom, setHasCom] = React.useState(false);
//
//     React.useEffect(() => {
//       if (!hasCom) {
//         import('pages/' + path).then((res) => {
//           Com = res.default;
//           setHasCom(true);
//         }).catch(res => {
//           console.error('lazyComponent error:', res);
//         });
//       }
//
//       return () => {
//         Com = null;
//       };
//     });
//
//     return Com ? <Com /> : <Spin size="large" style={{ width: '100%', margin: '40px 0' }} />;
//   };
//
// }
