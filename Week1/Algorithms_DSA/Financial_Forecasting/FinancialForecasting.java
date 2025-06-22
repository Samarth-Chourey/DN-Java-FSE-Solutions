public class FinancialForecasting {

    public static void main(String[] args) {
        double principal = 10000;
        double rate = 0.1;

        int time = 5;

        double result = forecastCal(principal, rate, time);
        System.out.printf("Financial Forecast for %d years and ₹%.2f amount with %.2f rate: ₹%.2f\n", time, principal, rate, result);

        result = forecastCalIter(principal, rate, time);
        System.out.printf("Financial Forecast for %d years and ₹%.2f amount with %.2f rate: ₹%.2f\n", time, principal, rate, result);
    }

    public static double forecastCal(double principal, double rate, int time) {
        if (time == 0) {
            return principal;
        }
        return forecastCal(principal * (1 + rate), rate, time - 1);
    }

    public static double forecastCalIter(double principal, double rate, int time) {
        for (int i = 0; i < time; i++) {
            principal *= (1 + rate);
        }
        return principal;
    }
}

