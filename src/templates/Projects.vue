<template>
  <Layout>
    <div class="project">
      <div class="container">
        <div class="project-header">
          <h1 class="project-title">{{$page.project.title}}</h1>
          <div class="project-info">
            <div class="categories-container">
              <div class="categories">
                <span class="label">Categories</span>
                <span class="category" v-for="cate in $page.project.categories">{{cate.title}}</span>
              </div>
            </div>
            <div class="year-container">
              <span class="label">Year</span>
              <div>{{new Date($page.project.created_at).getFullYear()}}</div>
            </div>
          </div>
        </div>
        <div class="content" v-html="mdToHtml($page.project.content)"></div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query ($id: ID!) {
  project: strapiProject(id: $id) {
    id
    title
    content
    categories {
      id
      title
    }
    created_at
  }
}
</page-query>
<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()
export default {
  name: 'ProjectPage',
    metaInfo: {
    title: 'Project Detail'
  },
  methods: {
    mdToHtml (mdStr) {
      return md.render(mdStr)
    }
  }
}
</script>

<style scoped>
.project-header {
  /* padding: 20vh 0 4rem; */
  padding: 5vh 0 4rem;
}

.project-title {
  font-size: 4rem;
  margin: 0 0 4rem;
  padding: 0;
}

.project-info {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}

.project-info > div {
  margin-right: 4rem;
}

.project-info > div:last-of-type {
  margin: 0;
}

.category:after {
  content: ", ";
}

.category:last-of-type:after {
  content: "";
}
</style>