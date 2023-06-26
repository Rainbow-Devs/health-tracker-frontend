import { CalorieIcon, LogIcon, ReminderIcon } from "@images/ServicesIcons";
import { ServicesListCard } from "@molecules/ServicesListCard";

export const ServicesList: React.FC = () => {
  return (
    <section className="pb-12 pt-20 lg:pb-20 lg:pt-24">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-screen-md text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold">
                Our Features
              </span>
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
              <p>
                We make it easier to track all of your health and fitness goals.
                Currently, you can log your exercises in the fitness log, count
                calories burned, and set reminders for upcoming workouts.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 place-items-stretch gap-6 px-4 md:grid-cols-3">
          <ServicesListCard>
            <LogIcon />
            <h4 className="mb-3 text-xl font-bold">Fitness Log</h4>
            <p>
              Log your workouts to highlight progress and note improvements.
            </p>
          </ServicesListCard>
          <ServicesListCard>
            <CalorieIcon />
            <h4 className="mb-3 text-xl font-bold">Calorie Counter</h4>
            <p>
              Although calories are only one aspect of your health and wellness
              journey, it’s one way to quantify your efforts. Count the number
              of calories burned from any exercise.
            </p>
          </ServicesListCard>
          <ServicesListCard>
            <ReminderIcon />
            <h4 className="mb-3 text-xl font-bold">Reminders</h4>
            <p>Build a steady fitness schedule by creating reminders.</p>
          </ServicesListCard>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
