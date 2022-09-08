import React from "react";
import Modal from "react-modal";

// * stylesheet imports
import "../../styles/modals/OrderModal.css";

const OrderModal = () => {
  const EMAIL_CONTENT_PLACEHOLDER =
    "Please enter any additional details for your order here.";
  const modalPosition = React.useState("center");
  const modalSize = React.useState("medium");

  return (
    <Modal
      className="order-modal"
      position={modalPosition}
      size={modalSize}
      isOpen={true}
    >
      <div className="[ order-modal-content-wrapper ] [ display-type-flex align-vertical gap-spacing-2 ]">
        <h4 className="[ order-modal-header ] [ justify-text-center ]">
          ORDER FORM
        </h4>
        <div className="[ order-instructions ]">
          <p className="[ greeting-message ]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            voluptas consequatur pariatur consectetur necessitatibus veritatis.
          </p>
          <p className="[ instruction-message ]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            mollitia consequatur, sint voluptatem rerum dolorem maiores! Odit
            minus saepe ullam nam sequi ea accusantium! Sint culpa porro alias.
            Ex, perferendis in sed ipsum nesciunt pariatur debitis quae veniam
            expedita eum.
          </p>
          <ul className="[ order-requirement-list ]">
            <li className="[ order-requirement ]">Lorem, ipsum.</li>
            <li className="[ order-requirement ]">Lorem, ipsum dolor.</li>
            <li className="[ order-requirement ]">Lorem, ipsum.</li>
            <li className="[ order-requirement ]">Lorem.</li>
            <li className="[ order-requirement ]">
              Lorem ipsum dolor sit amet.
            </li>
          </ul>
        </div>
        <form className="[ order-submission-form ]">
          <input
            type="text"
            name="fullName"
            className="[ customer-name ]"
            placeholder="Full Name"
            id=""
          />
          <input
            type="number"
            name="phone-number"
            className="[ return-phone-number-entry ]"
            id="return-phone-number-entry"
          />
          <input
            type="email"
            name="email"
            className="[ return-email-entry ]"
            id="return-email-entry-box"
          />
          <input
            type="email"
            name="email"
            className="[ return-email-entry ] [ confirm-return-email ]"
            id="return-email-confirm-box"
          />
          <textarea
            name="email-content"
            id="email-content"
            className="[ email-content ]"
            placeholder={EMAIL_CONTENT_PLACEHOLDER}
          />
        </form>
      </div>
    </Modal>
  );
};

export default OrderModal;
