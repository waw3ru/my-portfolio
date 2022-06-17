<script setup>
import { ref, onMounted } from "#imports";
import { Sidebar } from "#components";
import { TypedJs } from "@/util";

const typedOptions = {
  strings: ["John Waweru", "A Software Engineer", "From Nairobi, Kenya"],
  typeSpeed: 60,
  backDelay: 1500,
  loop: true,
};
const typedElementHost = ref(null);

onMounted(() => {
  TypedJs(typedElementHost?.value, typedOptions);
});
</script>

<template>
  <div id="homepage">
    <div class="homepage__section d-flex position-relative">
      <div class="w-50 position-relative main-section">
        <div
          class="w-100 h-100 position-relative text-center d-flex flex-wrap justify-content-center align-items-center section-content"
        >
          <div class="row w-100">
            <div class="col-12">
              <h1>I'm <span class="alt-text" ref="typedElementHost"></span></h1>
            </div>

            <div class="col-12">
              <div class="row w-100 my-5">
                <div class="col-6">
                  <button type="button" class="btn btn-warning">
                    Download My Resume
                  </button>
                </div>
                <div class="col-6">
                  <button type="button" class="btn btn-danger">
                    Contact Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-50 position-relative sidebar-section">
        <Sidebar />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#homepage {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;

  .homepage {
    &__section {
      width: 100%;
      height: 100%;
      position: relative;
      margin: 0;

      .main-section {
        background-image: url("/homepage-bg.jpg");
        background-size: cover;
        background-position: center;
      }

      .section-content {
        top: 0;
        left: 0;
        z-index: 11;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.55);

        h1 {
          color: #fff;

          span.alt-text {
            color: #f1af0f;
          }
        }
      }
    }
  }
}
</style>
