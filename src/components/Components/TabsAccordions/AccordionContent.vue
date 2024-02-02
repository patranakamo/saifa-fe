<template>
  <div class="card border-0 box-shadow border-radius-10 mb-3">
    <div class="card-body p-4">
      <h4 class="text-dark fs-18 fw-medium mb-3">Accordion Example</h4>

      <div class="faq-accordion-wrap mw-100">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h6 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Example Accordion Title Text
              </button>
            </h6>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>
                  Sed porttitor lectus nibh. Donec rutrum congue leo eget
                  malesuada. Vivamus magna justo, lacinia eget consectetur sed,
                  convallis at tellus. Praesent sapien massa, convallis a
                  pellentesque nec, egestas non nisi. Sed porttitor lectus nibh.
                  Donec sollicitudin molestie malesuada. Sed porttitor lectus
                  nibh. Vestibulum ac diam sit amet quam vehicula elementum sed
                  sit amet dui. Curabitur arcu erat, accumsan id imperdiet et,
                  porttitor at sem. Curabitur aliquet quam id dui posuere
                  blandit.
                </p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h6 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                02. Example Accordion Title Text
              </button>
            </h6>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>
                  Sed porttitor lectus nibh. Donec rutrum congue leo eget
                  malesuada. Vivamus magna justo, lacinia eget consectetur sed,
                  convallis at tellus. Praesent sapien massa, convallis a
                  pellentesque nec, egestas non nisi. Sed porttitor lectus nibh.
                  Donec sollicitudin molestie malesuada. Sed porttitor lectus
                  nibh. Vestibulum ac diam sit amet quam vehicula elementum sed
                  sit amet dui. Curabitur arcu erat, accumsan id imperdiet et,
                  porttitor at sem. Curabitur aliquet quam id dui posuere
                  blandit.
                </p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h6 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                03. Example Accordion Title Text
              </button>
            </h6>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>
                  Sed porttitor lectus nibh. Donec rutrum congue leo eget
                  malesuada. Vivamus magna justo, lacinia eget consectetur sed,
                  convallis at tellus. Praesent sapien massa, convallis a
                  pellentesque nec, egestas non nisi. Sed porttitor lectus nibh.
                  Donec sollicitudin molestie malesuada. Sed porttitor lectus
                  nibh. Vestibulum ac diam sit amet quam vehicula elementum sed
                  sit amet dui. Curabitur arcu erat, accumsan id imperdiet et,
                  porttitor at sem. Curabitur aliquet quam id dui posuere
                  blandit.
                </p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h6 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse4"
                aria-expanded="false"
                aria-controls="collapse4"
              >
                04. Example Accordion Title Text
              </button>
            </h6>
            <div
              id="collapse4"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>
                  Sed porttitor lectus nibh. Donec rutrum congue leo eget
                  malesuada. Vivamus magna justo, lacinia eget consectetur sed,
                  convallis at tellus. Praesent sapien massa, convallis a
                  pellentesque nec, egestas non nisi. Sed porttitor lectus nibh.
                  Donec sollicitudin molestie malesuada. Sed porttitor lectus
                  nibh. Vestibulum ac diam sit amet quam vehicula elementum sed
                  sit amet dui. Curabitur arcu erat, accumsan id imperdiet et,
                  porttitor at sem. Curabitur aliquet quam id dui posuere
                  blandit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccordionContent",
};
</script>