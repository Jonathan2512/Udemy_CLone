
import { toast, cssTransition } from 'react-toastify';

const Zoom = cssTransition({
    enter: 'zoomIn',
    exit: 'zoomOut',
    // default to 750ms, can be omitted
    duration: 750,
});

export const SuccessNotify = (message) => {
    toast.success(message, {
        transition: Zoom,
        position: "top-center",
        autoClose: 1000
    });
}
export const WariningNotify = (message) => {
    toast.warn(message, {
        transition: Zoom,
        position: "top-center",
        autoClose: 1000,
    });
}
export const ErrNotify = (message) => {
    toast.error(message, {
        transition: Zoom,
        position: "top-center",
        autoClose: 1000,
    });
}