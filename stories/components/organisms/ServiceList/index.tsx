export const ServiceList: React.FC = () => {
  return (
    <section className="pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-white">
                Our Features
              </span>
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
              <p className="text-base text-white">
                We make it easier to track all of your health and fitness goals.
                Currently, you can log your exercises in the fitness log, count
                calories burned, and set reminders for upcoming workouts.
              </p>
            </div>
          </div>
        </div>
        <div className="grid place-items-stretch gap-6 px-4 lg:grid-cols-3">
          <div className="col-span-1 rounded-[20px] border-2 border-ctaColor-dark p-7 shadow-md hover:shadow-lg md:px-7 md:pb-12 xl:px-10">
            <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-ctaColor-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="black"
                className="h-9 w-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
            </div>
            <h4 className="mb-3 text-xl font-bold text-white">Fitness Log</h4>
            <p className="text-white">
              Log your workouts to highlight progress and note improvements.
            </p>
          </div>
          <div className="col-span-1 rounded-[20px] border-2 border-ctaColor-dark p-7 shadow-md hover:shadow-lg md:px-7 md:pb-12 xl:px-10">
            <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-ctaColor-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="black"
                className="h-9 w-9"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </div>
            <h4 className="mb-3 text-xl font-bold text-white">
              Calorie Counter
            </h4>
            <p className="text-white">
              Although calories are only one aspect of your health and wellness
              journey, it’s one way to quantify your efforts. Count the number
              of calories burned from any exercise.
            </p>
          </div>
          <div className="col-span-1 rounded-[20px] border-2 border-ctaColor-dark p-7 shadow-md hover:shadow-lg md:px-7 md:pb-12 xl:px-10">
            <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-ctaColor-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="black"
                className="h-9 w-9"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </div>
            <h4 className="mb-3 text-xl font-bold text-white">Reminders</h4>
            <p className="text-white">
              Build a steady fitness schedule by creating reminders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
