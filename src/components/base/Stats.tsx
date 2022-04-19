export type Stat = {
  icon?: () => JSX.Element;
  title?: string;
  subtitle?: string;
};

export type StatsProps = {
  data: Array<Stat>;
};

export const StatsSeparator = () => {
  return <div className="border-b-2 md:border-l-2 border-white" />;
};

export const Stats = ({ data }: StatsProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 font-special-elite">
      {data.map(({ icon: Icon, title, subtitle }, idx) => (
        <>
          {idx !== 0 && <StatsSeparator />}
          <div className="flex flex-col items-center">
            {Icon && (
              <div className="mb-5">
                <Icon />
              </div>
            )}
            {title && (
              <h3 className="text-[30px] text-typography-primary font-bold">
                {title}
              </h3>
            )}
            {subtitle && (
              <h4 className="text-[16px] text-typography-primary font-semibold">
                {subtitle}
              </h4>
            )}
          </div>
        </>
      ))}
    </div>
  );
};
