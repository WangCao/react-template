import React from 'react';
import ReactDom from 'react-dom';
import App from 'Src/app';
import 'Src/Styles/_Reset.less';
import moment from 'moment';

moment.locale('zh-cn');

if (module && module.hot) {
  module.hot.accept();
}

ReactDom.render(<App />, document.querySelector('#root'));
