import Vue from "vue"
import Store from "@/store"
// import Amplify from "@aws-amplify/core"
import { DataStore } from "@aws-amplify/datastore"
import { Post, PostStatus } from "@/models"

export default Vue.extend({
  data() {
    return {
      text: "hoge",
      posts: []
    }
  },
  created() {
    Store.dispatch("setHiddenToolbarItems", true)
  },
  async mounted() {
    await this.queryData()
  },
  methods: {
    getText(): string {
      return this.text
    },
    async queryData() {
      try {
        this.posts = await DataStore.query(Post)
        console.log(this.posts)
      } catch (err) {
        console.error(err)
      }
    },
    async postData() {
      try {
        await DataStore.save(
          new Post({
            title: "My First Post",
            rating: 10,
            status: PostStatus.ACTIVE
          })
        )
        console.log("Saved Posts")
        await this.queryData()
      } catch (err) {
        console.error(err)
      }
    },
    async deleteData() {
      try {
        if (this.posts.length > 0) {
          await DataStore.delete(this.posts[0])
          console.log("Deleted Posts")
          await this.queryData()
        } else {
          console.log("No Posts")
        }
      } catch (err) {
        console.error(err)
      }
    }
  }
})
