import { Button, StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '@/components/Themed';
import { Link, router } from 'expo-router';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Button title="Imperative" onPress={() => {router.push("/two/deep");}}></Button>
      
      <Link href='/two/deep' asChild>
          <TouchableOpacity>
              <Text>Link Component</Text>
          </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
