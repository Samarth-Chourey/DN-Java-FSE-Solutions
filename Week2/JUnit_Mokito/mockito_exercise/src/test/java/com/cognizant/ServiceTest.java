package com.cognizant;


import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

public class ServiceTest {
    @Test
    public void testExternalApi() {
        // Step 1: Create a mock of ExternalApi
        ExternalApi mockApi = mock(ExternalApi.class);

        // Step 2: Stub getData() to return a fake value
        when(mockApi.getData()).thenReturn("Mock Data");

        // Step 3: Inject mock into MyService
        Service service = new Service(mockApi);

        // Step 4: Call method under test
        String result = service.fetchData();

        // Step 5: Assert the result
        assertEquals("Mock Data", result);

        // Optional: Verify the interaction
        verify(mockApi).getData();
    }
}
