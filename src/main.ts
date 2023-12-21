import { createApp } from 'vue'
import { NavBar, Tabbar, TabbarItem, Toast, Search, Tag, Divider, TreeSelect, Cell, CellGroup, Form, Field, Card } from 'vant';
import App from './App.vue'

import * as VueRouter from 'vue-router';
import routes from "./config/router";

const app = createApp(App)
app.use(NavBar);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Toast);
app.use(Search);
app.use(Tag);
app.use(Divider);
app.use(TreeSelect);
app.use(Cell);
app.use(CellGroup);
app.use(Form);
app.use(Field);
app.use(Card);

const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

app.use(router);

app.mount('#app')
