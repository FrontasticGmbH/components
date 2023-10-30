import React, { useState } from 'react';
import { LockClosedIcon, TrashIcon } from '@heroicons/react/24/outline';
import Button from '..';
import Typography from '../../typography';

const ButtonContent = () => {
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);

  const toggleButtonFeedback = () => {
    setLoading(true);

    const loadingTimer = setTimeout(() => {
      setLoading(false);
      setAdded(true);
      clearTimeout(loadingTimer);

      const addedTimer = setTimeout(() => {
        setAdded(false);
        clearTimeout(addedTimer);
      }, 500);
    }, 1500);
  };

  return (
    <div className="ml-44">
      <Typography className="mt-40 w-[40%] text-28 font-bold text-black">Button</Typography>
      <Typography className="mt-20 w-[60%] text-20 leading-loose text-neutral-700">
        The base button component that can be styled in a variety of ways, including different sizes and colors.
      </Typography>

      <div className="mt-32 flex w-full justify-start">
        <div className="flex w-full flex-col">
          <Typography className="mt-12 w-[40%] text-24 font-medium text-black">Button sizing</Typography>
          <div className="mt-40 flex items-center">
            <Typography className="w-200 text-14 text-secondary-black">Size icon:</Typography>
            <div className="ml-16">
              <Button variant="primary" size="icon" onClick={toggleButtonFeedback} loading={loading} added={added}>
                <TrashIcon className="w-20" />
              </Button>
            </div>
          </div>

          <div className="mt-24 flex items-center">
            <Typography className="w-200 text-14 text-secondary-black">Size xs:</Typography>
            <div className="ml-16">
              <Button variant="primary" size="xs" onClick={toggleButtonFeedback} loading={loading} added={added}>
                Button
              </Button>
            </div>
          </div>

          <div className="mt-24 flex items-center">
            <Typography className="w-200 text-14 text-secondary-black">Size sm:</Typography>
            <div className="ml-16">
              <Button variant="primary" size="s" onClick={toggleButtonFeedback} loading={loading} added={added}>
                Button
              </Button>
            </div>
          </div>

          <div className="mt-24 flex items-center">
            <Typography className="w-200 text-14 text-secondary-black">Size md:</Typography>
            <div className="ml-16">
              <Button variant="primary" size="m" onClick={toggleButtonFeedback} loading={loading} added={added}>
                Button
              </Button>
            </div>
          </div>

          <div className="mt-24 flex items-center">
            <Typography className="w-200 text-14 text-secondary-black">Size lg:</Typography>
            <div className="ml-16">
              <Button variant="primary" size="l" onClick={toggleButtonFeedback} loading={loading} added={added}>
                Button
              </Button>
            </div>
          </div>

          <div className="mt-24 flex items-center">
            <Typography className="w-200 text-14 text-secondary-black">Size full width for 15 % panel:</Typography>
            <div className="ml-16 w-[30%]">
              <Button variant="primary" size="full" onClick={toggleButtonFeedback} loading={loading} added={added}>
                Button
              </Button>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col">
          <Typography className="mt-12 w-[40%] text-24 font-medium text-black">Button stylings</Typography>
          <div className="mt-40 flex w-full items-center">
            <Typography className="w-200 text-14 text-secondary-black">Ghost button:</Typography>
            <div className="ml-16 w-[30%]">
              <Button variant="ghost" size="full" onClick={toggleButtonFeedback} loading={loading} added={added}>
                Ghost
              </Button>
            </div>
          </div>

          <div className="mt-24 flex items-center">
            <Typography className="w-200 text-14 text-secondary-black">Primary button:</Typography>
            <div className="ml-16 w-[30%]">
              <Button variant="primary" size="full" onClick={toggleButtonFeedback} loading={loading} added={added}>
                Primary
              </Button>
            </div>
          </div>

          <div className="mt-24 flex items-center">
            <Typography className="w-200 text-14 text-secondary-black">Secondary button:</Typography>
            <div className="ml-16 w-[30%]">
              <Button variant="secondary" size="full" onClick={toggleButtonFeedback} loading={loading} added={added}>
                Secondary
              </Button>
            </div>
          </div>

          <div className="mt-24 flex items-center">
            <Typography className="w-200 text-14 text-secondary-black">Warning button:</Typography>
            <div className="ml-16 w-[30%]">
              <Button variant="warning" size="full" onClick={toggleButtonFeedback} loading={loading} added={added}>
                Warning
              </Button>
            </div>
          </div>

          <div className="mt-24 flex items-center">
            <Typography className="w-200 text-14 text-secondary-black">Disabled button:</Typography>
            <div className="ml-16 w-[30%]">
              <Button
                variant="primary"
                size="full"
                disabled
                onClick={toggleButtonFeedback}
                loading={loading}
                added={added}
              >
                Disabled
              </Button>
            </div>
          </div>

          <div className="mt-24 flex items-center">
            <Typography className="w-200 text-14 text-secondary-black">Underlined button:</Typography>
            <div className="ml-16 w-[30%]">
              <Button
                variant="underlined"
                size="full"
                onClick={toggleButtonFeedback}
                loading={loading}
                added={added}
                className="flex justify-center"
              >
                Underlined
              </Button>
            </div>
          </div>

          <div className="mt-24 flex items-center">
            <Typography className="w-200 text-14 text-secondary-black">Primary icon left button:</Typography>
            <div className="ml-16 w-[30%]">
              <Button
                variant="primary"
                iconPosition="left"
                size="full"
                onClick={toggleButtonFeedback}
                loading={loading}
                added={added}
                icon={<LockClosedIcon className="h-20" />}
                className="flex justify-center"
              >
                Primary Icon
              </Button>
            </div>
          </div>

          <div className="mt-24 flex items-center">
            <Typography className="w-200 text-14 text-secondary-black">Secondary icon right button:</Typography>
            <div className="ml-16 w-[30%]">
              <Button
                variant="secondary"
                iconPosition="right"
                size="full"
                onClick={toggleButtonFeedback}
                loading={loading}
                added={added}
                icon={<LockClosedIcon className="h-20" />}
                className="flex justify-center"
              >
                Secondary Icon
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonContent;
