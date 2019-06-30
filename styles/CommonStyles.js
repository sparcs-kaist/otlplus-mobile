import { StyleSheet } from 'react-native';

const mainColor = '#E54C65';
const subColor = '#F9F0F0';
const blockColor = '#EEEEEE';

export { mainColor, subColor, blockColor };

export default StyleSheet.create({
  container: { flex: 1 },
  text: {
    fontSize: 13,
  },
  boldText: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  paddingBlock: {
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    borderBottomColor: '#e54c63',
    borderBottomWidth: 3,
    shadowOpacity: 0.3,
  },
});
