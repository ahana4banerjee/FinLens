import cron from "node-cron";
import { processRecurringTransactions } from "./jobs/transaction.job";
import { processReportJob } from "./jobs/report.job";

const scheduleJob = (name: string, time: string, job: Function) => {
  console.log(`Scheduling ${name} at ${time}`);

  return cron.schedule(
    time,
    async () => {
      try {
        await job();
        console.log(`${name} completed`);
      } catch (error) {
        console.log(`${name} failed`, error);
      }
    },
  );
};

export const startJobs = () => {
  return [
    scheduleJob("Transactions", "* * * * *", processRecurringTransactions),

    //run 2:30am every first of the month
    scheduleJob("Reports", "* * * * *", processReportJob),
  ];
};