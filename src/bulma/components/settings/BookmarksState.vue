<template>
    <div class="level is-mobile settings">
        <div class="level-left">
            <div class="level-item">
                {{ i18n('Bookmarks') }}
            </div>
        </div>
        <div class="level-right">
            <div class="level-item">
                <core-bookmark-state>
                    <template #default="{ bindings, events }">
                        <vue-switch class="is-medium"
                            v-bind="bindings"
                            v-on="events"/>
                        </template>
                </core-bookmark-state>
            </div>
        </div>
    </div>
</template>

<script>
import VueSwitch from '@liberu-ui/switch/bulma';
import CoreBookmarkState from '../../../core/components/settings/BookmarksState.vue';

export default {
    name: 'BookmarksState',

    components: { CoreBookmarkState, VueSwitch },

    inject: ['i18n'],
};
</script>
