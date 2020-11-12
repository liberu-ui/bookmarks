import Vue from 'vue';
import App from '@enso-ui/ui/src/core/app';
import BookmarksState from './components/settings/BookmarksState.vue';

Vue.component('setting-bookmarks-state', BookmarksState);
App.registerSettingsItem('setting-bookmarks-state', 500);
