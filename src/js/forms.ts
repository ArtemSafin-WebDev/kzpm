import Validator from "./classes/Validator";
import axios from "axios";

export default function forms() {
  const forms = Array.from<HTMLFormElement>(
    document.querySelectorAll(".js-form")
  );

  forms.forEach((form) => {
    const formValidator = new Validator(form);
    const controller = new AbortController();
    const submitBtn = form.querySelector<HTMLButtonElement>(
      'button[type="submit"]'
    );

    const handleFormSubmit = (event: SubmitEvent) => {
      form.classList.remove("form-success");
      form.classList.remove("form-error");
      event.preventDefault();
      if (!formValidator || !form) return;
      formValidator.validate();

      if (formValidator.valid) {
        const formData = new FormData(form);
        if (submitBtn) submitBtn.disabled = true;
        axios
          .post(form.action, formData, {
            signal: controller.signal,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then(({data}) => {
            if (data.status === "success") {
              form.classList.add("form-success");
              // @ts-ignore
              window.openModal("#success");
              form.reset();
            } else {
              form.classList.add("form-error");
              // @ts-ignore
              window.openModal("#error");
            }
          })
          .catch((err) => {
            form.classList.add("form-error");
            // @ts-ignore
            window.openModal("#error");
            console.error(err);
          })
          .finally(() => {
            if (submitBtn) submitBtn.disabled = false;

            // Обновляем токены капчи
            // @ts-ignore
            if (window.widgets && window.grecaptcha) {
              // @ts-ignore
              window.widgets.forEach((widgetId) => {
                // @ts-ignore
                window.grecaptcha.reset(widgetId);
              });
            }
          });
      }
    };
    form.addEventListener("submit", handleFormSubmit);
  });
}
