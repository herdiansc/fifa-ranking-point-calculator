import { useState } from 'react';
import { FormField } from './form-field';

export default function WelcomeStep1() {
  const [formData, setFormData] = useState({
    appId: '',
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setFormData((form) => ({ ...form, [field]: event.target.value }));
  };

  return (
    <>
      <div className="card bg-card w-fit place-self-center">
        <figure className="bg-primary">
          <div className="w-full">
            <div className="h-full grid place-items-center py-3">
              <ul className="steps">
                <li className="step step-accent">Start</li>
                <li className="step">Show Reviews</li>
                <li className="step">Finish</li>
              </ul>
            </div>
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Lets Start Now!</h2>
          <p className="text-base">
            You can enter here your App ID.
            <br />
            Usually in the form com.example
          </p>
          <form method="post" className="p-6 w-96">
            <FormField
              htmlFor="appId"
              placeholder="Type Here Your App ID"
              value={formData.appId}
              onChange={(e) => handleInputChange(e, 'appId')}
            />
            <div className="card-actions justify-center">
              <button
                className="btn btn-accent btn-wide text-accent-content"
                type="submit"
              >
                Start
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
