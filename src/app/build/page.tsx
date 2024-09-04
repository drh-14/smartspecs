import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
export default function Build() {
  return (
    <main>
      <div className = 'flex flex-col items-center mt-12 justify-center'>
        <div className = 'flex flex-col w-5/12 p-4 text-black gap-12'>
        <div className = 'flex flex-col gap-4 bg-white rounded-md p-4'>
          <div>What is your budget?</div>
          <FormGroup className = 'bg-white '>
          <FormControlLabel control={<Checkbox/>} label="$500-1000" />
          <FormControlLabel control={<Checkbox />} label="$1000-1500"/>
          <FormControlLabel control = {<Checkbox />} label = "$1500-2000"/>
          <FormControlLabel control = {<Checkbox />} label = "$2000-2500"/>
          <FormControlLabel control = {<Checkbox />} label = "$2500-3000"/>
          </FormGroup>
          </div>
          <div className = 'flex flex-col gap-4 bg-white rounded-md border-2 p-4'>
          <div>What game genres do you play or intend on playing?</div>
          <FormGroup>
          <FormControlLabel control={<Checkbox/>} label="Shooters"/>
          <FormControlLabel control={<Checkbox />} label="MMO/MMORPG"/>
          <FormControlLabel control = {<Checkbox />} label = "Grand Strategy/RTS"/>
          <FormControlLabel control = {<Checkbox />} label = "Action"/>
          </FormGroup>
          </div>
          <div className = 'flex flex-col gap-4 bg-white p-4 rounded-md'>
          <div>Do you store a lot of images or videos?</div>
          <FormGroup>
          <FormControlLabel control={<Checkbox/>} label="Yes" />
          <FormControlLabel control={<Checkbox />} label="No"/>
          </FormGroup>
          </div>
          <div className = 'flex flex-col gap-4 bg-white p-4 rounded-md'>
          <div>What size case would you like?</div>
          <FormGroup>
          <FormControlLabel control={<Checkbox/>} label="Small" />
          <FormControlLabel control={<Checkbox />} label="Medium"/>
          <FormControlLabel control={<Checkbox />} label="Large"/>
          </FormGroup>
          </div>
          <div className = 'flex flex-col gap-4 p-4 rounded-md bg-white'>
          <div>Would you like Wi-Fi or Bluetooth?</div>
          <FormGroup>
          <FormControlLabel control={<Checkbox/>} label="Wi-Fi" />
          <FormControlLabel control={<Checkbox />} label="Bluetooth"/>
          <FormControlLabel control={<Checkbox />} label="None"/>
          </FormGroup>
          </div>
          <Button variant = "contained">Build My PC!</Button>
        </div>
      </div>

    </main>
  );
}
