

const DemoTastic = ({data}) => {
  const presenterName = (data?.data?.dataSource ?? []);

  return (
    <div className="flex flex-wrap items-center gap-4">
      It is an UI component displayed in {presenterName}'s onboarding session.
    </div>
  );
};

export default DemoTastic;
