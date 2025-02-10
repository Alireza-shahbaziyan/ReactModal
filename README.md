

---

# **Reusable Modal Component**

This is a reusable Modal component built with **React** and **TailwindCSS**. It's designed to be used in multiple projects with ease. It supports content customization and includes the necessary functionality to open, close, and display any content inside the modal.

## **Features**

- **Customizable Content:** The modal supports any children passed to it, so you can customize the content for different use cases.
- **Closable Modal:** The modal includes a close button to dismiss it when no longer needed.
- **Flexible:** You can easily change the title and pass custom content (such as forms, messages, etc.) into the modal.
- **Reusable:** The component is designed to be reusable across different projects.

## **Installation**

1. Clone the repository or add the `Modal` component to your project.
2. Install `PropTypes` for prop validation (optional but recommended):

```bash
npm install prop-types
```

## **Usage**

### **1. Basic Usage**

```tsx
import React, { useState } from "react";
import Modal from "./Modal"; // Adjust the path as necessary

const ExampleComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="My Custom Modal"
      >
        <div>
          <h3>This is some content inside the modal.</h3>
          <p>You can place anything you want inside the modal here.</p>
        </div>
      </Modal>
    </div>
  );
};

export default ExampleComponent;
```

### **2. Modal with Form Example**

```tsx
import React, { useState } from "react";
import Modal from "./Modal"; // Adjust the path as necessary

const PasswordChangeForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Change Password</button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Change Your Password"
      >
        <form>
          <label htmlFor="current-password">Current Password:</label>
          <input
            type="password"
            id="current-password"
            name="current-password"
            required
          />
          <label htmlFor="new-password">New Password:</label>
          <input
            type="password"
            id="new-password"
            name="new-password"
            required
          />
          <label htmlFor="confirm-password">Confirm New Password:</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </Modal>
    </div>
  );
};

export default PasswordChangeForm;
```

## **Props**

| Prop Name   | Type            | Description                                                              |
|-------------|-----------------|--------------------------------------------------------------------------|
| `isOpen`    | `bool`          | A boolean that controls whether the modal is visible or hidden. (Required) |
| `onClose`   | `function`      | A function that is called when the modal should be closed. (Required)     |
| `children`  | `ReactNode`     | The content to be displayed inside the modal. (Required)                   |
| `title`     | `string`        | An optional string to be displayed as the title of the modal.             |

## **Installation in Your Project**

If you're integrating this component into a new or existing React project, you can follow these steps:

1. **Copy the `Modal` Component** into your project directory (or clone the repository).
2. **Import the `Modal` component** in your other components or pages where needed.
3. **Pass the appropriate props** (`isOpen`, `onClose`, `children`, `title`) to use the modal in your application.

## **Prop Types**

The modal uses PropTypes for type validation, which ensures that the component receives the correct types of data:

```js
import PropTypes from 'prop-types';

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};
```

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize the `README.md` file based on your project needs!
