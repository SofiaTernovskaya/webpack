/**
 * Created by Not Igor on 30.05.2017.
 */
import './index.scss';
import 'normalize.css';
// import moment from 'moment';
import createMenu from '../../components/menu/menu';
setTimeout(function () {
    import('moment').then(function(moment) {
        console.log(moment().format());
    }).catch(function(err) {
        console.log('Failed to load moment', err);
    });
},3000);
const menu = createMenu(['Main page','About','Contacts'],'menu');
document.body.appendChild(menu);
console.log('on index js');