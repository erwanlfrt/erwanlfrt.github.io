<script setup lang="ts">
  import CustomTitle from '@/components/custom-title/CustomTitle.vue';
  </script>
  
  <template>
    <div class="section">
      <custom-title title="Curriculum Vitae"></custom-title>
      <div class="content">
        <p>
          If you want more information about my background, check my online CV here !
        </p>
        <div class="button-wrapper">
          <a>Open CV</a>
        </div>
      </div>
    
    </div>
  </template>
  
  <style lang="scss" scoped>
    .section {

      .content {

        .button-wrapper {
          display: flex;
          justify-content: center;
          a {
            color: white;
            background: #09A17D;
            padding: 10px 20px;
            border-radius: 20px;
          }
        }
        
      }
    }
  </style>