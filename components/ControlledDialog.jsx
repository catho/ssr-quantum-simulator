import { useState } from 'react';
import Button from '@catho/quantum/Button';
import Dialog from '@catho/quantum/Dialog';

const ControlledDialog = () => {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <>
      <Button onClick={() => setShowDialog(true)}>Open Dialog</Button>
      {showDialog && (
        <Dialog>
          <Button onClick={() => setShowDialog(false)}>Close Modal</Button>
        </Dialog>
      )}
    </>
  );
};

export default ControlledDialog;
