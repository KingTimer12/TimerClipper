import { Flex } from '@radix-ui/themes';
import Toolbar from './components/toolbar';
import FileInput from './components/area-files';
import Menu from './components/menu';

function App() {

  return (
    <Flex direction="column">
      <Toolbar />
      <Flex direction="column" align="center" className='bg-zinc-900 pt-4 h-[18rem]'>
        <Menu>
          <Flex align="center" justify="center" className='h-44'>
            <Menu.Content value='home'>
              <div className='flex justify-center'>
                <FileInput />
              </div>
            </Menu.Content>
          </Flex>
        </Menu>
      </Flex>
    </Flex>
  );
}

export default App;
