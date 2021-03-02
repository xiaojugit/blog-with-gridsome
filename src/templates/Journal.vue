<template>
  <Layout>
    <div class="journal">
      <div class="container journal-container">
        <div class="journal-header">
          <h1 class="journal-title">{{$page.journal.title}}</h1>
          <div class="journal-meta">
            <div class="journal-author">
              <span class="label">Author</span>
              <span class="author-name">{{$page.journal.users_permissions_user.username}}</span>
            </div>
            <div class="journal-date">
              <span class="label">Date</span>
              <div>{{$page.journal.created_at | date('DD. MMMM YYYY')}}</div>
            </div>
            <div class="journal-time">
              <span class="label">Time</span>
              <span>1 min read</span>
            </div>
          </div>
        </div>
        <div class="journal-content" v-html="mdToHtml($page.journal.content)"></div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query ($id: ID!) {
  journal: strapiJournal(id: $id) {
    id
    title
    content
    created_at
    users_permissions_user {
      id
      username
    }
  }
}
</page-query>
<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()
export default {
  name: 'JournalPage',
  metaInfo: {
    title: 'Journal Detail'
  },
  methods: {
    mdToHtml (mdStr) {
      return md.render(mdStr)
    }
  }
}
</script>

<style scoped>
.journal-container {
  max-width: 840px;
}

.journal-header {
  padding: 2rem 0 4rem;
}

.journal-title {
  font-size: 4rem;
  margin: 0 0 4rem;
  padding: 0;
}

.journal-meta {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}

.journal-meta > div {
  margin-right: 4rem;
}

.journal-meta > div:last-of-type {
  margin: 0;
}
</style>