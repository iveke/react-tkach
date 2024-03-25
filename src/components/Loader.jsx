import { createPortal } from "react-dom";
import { rootModal } from "../index";
import SyncLoader from "react-spinners/SyncLoader";
import { ModalBackground } from "components/Modal/Modal.style";

export const Loader = () => {
  return createPortal(
    <ModalBackground>
      <SyncLoader
        color="#36d7b7"
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </ModalBackground>, rootModal
  );
};
