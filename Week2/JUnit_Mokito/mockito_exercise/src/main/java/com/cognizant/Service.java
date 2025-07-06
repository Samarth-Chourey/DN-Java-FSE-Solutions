package com.cognizant;

public class Service {

    private final ExternalApi externalApi;

    public Service(ExternalApi externalApi) {
        this.externalApi = externalApi;
    }

    public String fetchData() {
        return externalApi.getData();
    }
}