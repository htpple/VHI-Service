import { boot } from "quasar/wrappers";
import i18nInstance from "src/i18n";

export default boot(({ app }) => {
  // Set i18n instance on app
  app.use(i18nInstance);
});
