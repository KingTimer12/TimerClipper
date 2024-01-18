import { Flex } from '@radix-ui/themes';
import Toolbar from './components/toolbar';
import FileInput from './components/area-files';

function App() {

  return (
    <Flex direction="column">
      <Toolbar />
      <Flex direction="column" align="center" className='bg-zinc-900 pt-4 h-[35.5rem]'>
        <FileInput />
      </Flex>
    </Flex>
  );
}

export default App;
