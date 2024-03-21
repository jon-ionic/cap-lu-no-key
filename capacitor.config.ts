import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'cap-lu-test',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    LiveUpdates: {
      appId: '42f81456',
      channel: 'unsigned-test',
      autoUpdateMethod: 'none',
      maxVersions: 2,
      key: 'ionic_cloud_public.txt',
      // @ts-ignore
      enabled: false,
    },
  }
};

export default config;
