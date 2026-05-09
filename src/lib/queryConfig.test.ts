import { describe, it, expect } from 'vitest';
import { createQueryConfig, QUERY_PRESETS } from './queryConfig';

describe('createQueryConfig', () => {
  it('should return DEFAULT preset by default', () => {
    const config = createQueryConfig();
    expect(config.staleTime).toBe(QUERY_PRESETS.DEFAULT.staleTime);
    expect(config.gcTime).toBe(QUERY_PRESETS.DEFAULT.gcTime);
  });

  it('should return STATIC preset when specified', () => {
    const config = createQueryConfig('STATIC');
    expect(config.staleTime).toBe(QUERY_PRESETS.STATIC.staleTime);
  });

  it('should allow overriding specific properties', () => {
    const config = createQueryConfig('REALTIME', { gcTime: 5000 });
    expect(config.staleTime).toBe(0); // From REALTIME preset
    expect(config.gcTime).toBe(5000); // Overridden value
  });
});
