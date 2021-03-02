<template>
  <Layout>
    <div class="container">
      <div class="hero">
        <h1 class="hero-title">Simplicity. Aesthetics. Value.</h1>
        <h2 class="hero-subtitle">
          Hi there, I'm an independent Digital Designer &amp;
          Art Director focused on digital design for brands that like to have fun.
        </h2>
      </div>
      <div class="projects">
        <div class="project" v-for="edge in $page.projects.edges" :key="edge.node.id">
          <g-link :to="`/projects/${edge.node.id}/`" class="project-link">
            <g-image
              :alt="edge.node.title"
              :src="`${GRIDSOME_API_URL + edge.node.cover.url}`"
              width="2560"
              class="thumbnail g-image--lazy g-image--loaded"
              blur="40"
            />
            <h3 class="project-title">{{edge.node.title}}</h3>
            <div class="categories">
              <span
                class="category"
                v-for="cate in edge.node.categories"
                :key="cate.id"
              >{{cate.title}}</span>
            </div>
          </g-link>
        </div>
      </div>
    </div>
    <latest-journals></latest-journals>
  </Layout>
</template>

<page-query>
query {
  projects: allStrapiProject(perPage: 4, page: 1) @paginate {
    edges {
      node {
        id
        title
        content
        cover {
          url
        }
        categories {
          id
          title
        }
        created_at
      }
    }
  }

  journals: allStrapiJournal (perPage: 4, page: 1) @paginate {
    edges {
      node {
        id
        title
        description
      }
    }
  }
}
</page-query>

<script>
import latestJournals from '../components/latest-journals.vue'

export default {
  name: 'IndexPage',
  components: { latestJournals },
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style scoped>
.hero {
  text-align: center;
  width: 480px;
  max-width: 100%;
  margin: 0 auto;
  padding: 4rem 0 8rem;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  padding: 0;
  margin: 0 0 2rem;
}

.hero-subtitle,
.hero-subtitle p,
.hero-title p {
  margin: 0;
  padding: 0;
}

.hero-subtitle {
  font-size: 1.15em;
  font-weight: 400;
  line-height: 1.68;
  opacity: 0.6;
}

.projects {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
}

.project {
  grid-column: auto/span 2;
  text-align: center;
}

.project-link {
  text-decoration: none;
}

.thumbnail {
  height: 560px;
  -o-object-fit: cover;
  object-fit: cover;
  transition: all 0.15s ease;
  box-shadow: 0 0 40px -20px rgba(0, 0, 0, 0.25);
}

.project-title {
  font-size: 1rem;
  color: var(--color-contrast);
  margin: 2rem 0 1rem;
}

.categories {
  font-size: 0.8rem;
  color: var(--color-contrast-1);
}

.category {
  margin-right: 0.8rem;
}

.category:last-of-type {
  margin: 0;
}

.project:hover .thumbnail {
  transform: scale(1.02);
  box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.25);
}

@media (min-width: 920px) {
  .project {
    grid-column: auto/span 1;
  }

  .project:nth-child(3n + 1) {
    grid-column: auto/span 2;
  }
}
</style>
