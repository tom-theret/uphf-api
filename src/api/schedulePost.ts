import { ScheduleBody, ScheduleResponse } from "../interfaces/Schedule";
import { SCHEDULE } from "../utils/endpoints";
import { UPHFFetcher } from "../utils/fetcher";

export const schedulePost = async (authToken: string, startDate: string, endDate: string): Promise<ScheduleResponse> => {
    const response = await UPHFFetcher(SCHEDULE(), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            authToken: authToken,
            startDate: startDate,
            endDate: endDate,
            asUser: null
        } as ScheduleBody)
    });
    return await response.json() as ScheduleResponse;
}