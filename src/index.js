import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const products = [{
    "id": "1",
    "title": "金大班/古城/2018夏季新款韩版小清新花苞高腰过膝半身裙子女潮",
    "image": "//img.alicdn.com/imgextra/i2/66035150/TB2q2QAjLiSBuNkSnhJXXbDcpXa_!!66035150.png",
    "price": 59,
    "count": 0
}, {
    "id": "2",
    "title": "BIGKING大金家 套装女夏2018新款 网红两件套装 女神气质短裤套装",
    "image": "//gd2.alicdn.com/imgextra/i2/202207645/TB2zC9urb9YBuNjy0FgXXcxcXXa_!!202207645.jpg",
    "price": 169,
    "count": 0
}, {
    "id": "3",
    "title": "MC欧美女装 夏季气质中长款时尚西服外套阔腿裤西装套装两件套女",
    "image": "//img.alicdn.com/imgextra/i2/2513483300/TB2EI18sSXlpuFjy0FeXXcJbFXa_!!2513483300.jpg",
    "price": 399,
    "count": 0
}];

ReactDOM.render(<App products={products} />, document.getElementById('root'));
registerServiceWorker();
