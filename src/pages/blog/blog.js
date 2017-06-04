/**
 * Created by Not Igor on 30.05.2017.
 */
/**
 * Created by Not Igor on 30.05.2017.
 */
import './blog.scss'
import 'normalize.css';
import createMenu from '../../components/menu/menu';
const menu = createMenu(['blog page','blog About','Blog Contacts'],'menu');
console.log(document, menu);
document.body.appendChild(menu);
console.log('on blog js');