// router.js
import {createRouter, createMemoryHistory} from 'vue-router';
import routes from '@/route/routes.js'

const router = createRouter({
    routes: routes,
	history: createMemoryHistory()
});


export default router;