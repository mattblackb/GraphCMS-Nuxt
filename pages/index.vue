<template>
<div>
  <Tutorial/>
       <div  v-for="post in postApps" :key= "post.id">
        
         <img v-if="post.imageHeader" v-bind:src=post.imageHeader.url />
          
          {{post.title}}
          {{post.id}}
        <div v-html="post.content.html"></div>
      
       </div>
</div>
</template>

<script>
import { gql } from 'graphql-request';
export default {
  name: 'IndexPage',
  async asyncData({ $graphcms }) {
    const { postApps } = await $graphcms.request(
      gql`
        {
          postApps {
            id
            title
            content {html}
            imageHeader {
              id
              url
            }
          }
        }
      `
    );
   
    return { postApps };
  },
};
</script>
