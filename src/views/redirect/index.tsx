<<<<<<< HEAD
=======
import { defineComponent } from 'vue'
>>>>>>> dc5f3b2b2b09549f2d0a09a90ace81c4d3883b1e
export default defineComponent({
  setup() {
    const route = useRoute()
    const router = useRouter()
    onBeforeMount(() => {
      const { params, query } = route
      const { path } = params
<<<<<<< HEAD
      router.replace({ path: '/' + path, query })
=======
      router.replace({ path: `/${path}`, query })
>>>>>>> dc5f3b2b2b09549f2d0a09a90ace81c4d3883b1e
    })
    return () => <div> </div>
  }
})
