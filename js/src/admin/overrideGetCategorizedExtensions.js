import getCategorizedExtensions from 'duroom/admin/utils/getCategorizedExtensions';
import getAlphabeticallyOrderedExtensions from './utils/getAlphabeticallyOrderedExtensions';
import getVendorCategorizedExtensions from './utils/getVendorCategorizedExtensions';
import getAvailabilityCategorizedExtensions from './utils/getAvailabilityCategorizedExtensions';

export default function overrideGetCategorizedExtensions() {
  switch (app.data.settings['duroom-ace.selected-categorization']) {
    case 'none':
      return getAlphabeticallyOrderedExtensions();

    case 'vendor':
      return getVendorCategorizedExtensions();

    case 'availability':
      return getAvailabilityCategorizedExtensions();

    default:
      return getCategorizedExtensions();
  }
}
