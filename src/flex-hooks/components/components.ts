import { Components } from "../../types/flex-hooks/Components";
import { addDeviceManagerToMainHeader } from "../../feature-library/device-manager/flex-hooks/components/MainHeader";
const componentHandlers: Components = {
  MainHeader: [
    addDeviceManagerToMainHeader,
  ],
};

export default componentHandlers;
