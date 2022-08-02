import ExampleComponent from '.';
import { fireEvent, getByText, render, screen } from '@testing-library/react';
import { string } from 'yup/lib/locale';

describe(ExampleComponent.name, () => {
  const defaultProps = {
    title: 'Component Title',
    content: 'Paragraph Content',
    fallbackContent: 'Fallback Content',
    emailInputLabel: 'Email Input Label',
    emailInputPlaceholder: 'Email Input Placeholder',
    onSubmit: () => {},
    emailInputValue: 'Email Input Value',
    onInputChange: (propKey: string, newValue: string) => {},
    disclaimer: 'Component Disclaimer',
  };

  test('title displays within heading', () => {
    render(<ExampleComponent {...defaultProps} />);

    expect(screen.getByRole('heading')).toHaveTextContent(defaultProps.title);
  });

  test('paragraph displays content, or fallbackContent if unavailable', () => {
    render(<ExampleComponent {...defaultProps} />);

    expect(screen.getByText(defaultProps.content)).toBeInTheDocument();
  });

  test('paragraph displays fallbackContent if content is falsey', () => {
    const props = {
      ...defaultProps,
      content: undefined,
    };
    render(<ExampleComponent {...props} />);

    expect(screen.getByText(defaultProps.fallbackContent)).toBeInTheDocument();
  });

  test('email input label displays "Email:" by default when emailInputLabel property not provided', () => {
    const props = {
      ...defaultProps,
      emailInputLabel: undefined,
    };
    render(<ExampleComponent {...props} />);

    expect(screen.getByLabelText('Email:')).toBeInTheDocument();
  });

  test('email input label displays emailInputLabel value passed when provided', () => {
    render(<ExampleComponent {...defaultProps} />);

    expect(screen.getByLabelText(defaultProps.emailInputLabel)).toBeInTheDocument();
  });

  test('email placeholder text displays "Enter email..." by default when emailInputPlaceholder property not provided', () => {
    const props = {
      ...defaultProps,
      emailInputPlaceholder: undefined,
    };
    render(<ExampleComponent {...props} />);

    expect(screen.getByPlaceholderText('Enter email...')).toBeInTheDocument();
  });

  test('email placeholder text displays emailInputPlaceholder value passed when provided', () => {
    render(<ExampleComponent {...defaultProps} />);

    expect(screen.getByPlaceholderText(defaultProps.emailInputPlaceholder)).toBeInTheDocument();
  });

  test('clicking submit button calls onSubmit function passed', () => {
    let testValue: string;
    const expectedTestValue = 'value';
    const onSubmit = jest.fn(() => {
      testValue = expectedTestValue;
    });
    const props = {
      ...defaultProps,
      onSubmit,
    };
    const { getByRole } = render(<ExampleComponent {...props} />);

    fireEvent.click(getByRole('button', { name: /submit/i }));

    expect(onSubmit).toBeCalled();
    expect(testValue).toBe(expectedTestValue);
  });

  test('email input value displays emailInputValue value passed', () => {
    render(<ExampleComponent {...defaultProps} />);

    expect(screen.getByRole('textbox', { name: defaultProps.emailInputLabel })).toHaveValue(
      defaultProps.emailInputValue,
    );
  });

  test('on email input change onInputChange is called, passing through the prop name and new value', () => {
    let testPropKey: string;
    let testNewValue: string;
    const expectedNewValue = 'newValue';
    const expectedPropKey = 'email';
    const onInputChange = jest.fn((propKey: string, newValue: string) => {
      testPropKey = propKey;
      testNewValue = newValue;
    });
    const props = {
      ...defaultProps,
      onInputChange,
    };

    const { getByRole } = render(<ExampleComponent {...props} />);

    fireEvent.change(
      getByRole('textbox', {
        name: defaultProps.emailInputLabel,
      }),
      {
        target: {
          value: expectedNewValue,
          name: expectedPropKey,
        },
      },
    );

    expect(testPropKey).toBe(expectedPropKey);
    expect(testNewValue).toBe(expectedNewValue);
  });

  test('disclaimer renders within paragraph if passed', () => {
    render(<ExampleComponent {...defaultProps} />);

    expect(screen.getByText(defaultProps.disclaimer)).toBeInTheDocument();
  });
});
