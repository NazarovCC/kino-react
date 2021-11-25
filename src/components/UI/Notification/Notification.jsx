import React from 'react';

const Notifacation = ({ notif, setNotification }) => {
  setTimeout(() => {
    setNotification({ ...notif, show: false });
  }, notif.delay);
  return notif.show ? (
    <div
      className="toast-container position-absolute top-0 end-0 p-3"
      style={{ zIndex: 11 }}
    >
      <div
        className="toast align-items-center text-white bg-warning border-0 show"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="d-flex">
          <div className="toast-body">{notif.msg}</div>
          <button
            type="button"
            className="btn-close btn-close-white me-2 m-auto"
            onClick={() => setNotification({ ...notif, show: false })}
            aria-label="Close"
          ></button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Notifacation;
