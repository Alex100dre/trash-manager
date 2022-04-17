import { Injectable } from "@nestjs/common";

interface Trash {
  id: string,
  takeOutDay: string,
  lastTakeOutDate: Date,
}
const trashes: Trash[] = [
  {
    id: 'YELLOW',
    takeOutDay: 'MONDAY',
    lastTakeOutDate: new Date('01/01/1970'),
  },
  {
    id: 'BLUE',
    takeOutDay: 'WEDNESDAY',
    lastTakeOutDate: new Date('01/01/1970'),
  },
  {
    id: 'BROWN',
    takeOutDay: 'FRIDAY',
    lastTakeOutDate: new Date('01/01/1970'),
  },
]

const weekday = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];

@Injectable()
export class TrashService {
  getCurrentTrash(): Trash {
    const currentWeekDay = weekday[new Date().getDay()]
    return trashes.find(
      (trash: Trash) => {
        return trash.takeOutDay === currentWeekDay
      }
    )
  }

  setCurrentTrashTookOut(id: string): void {
    const currentTrashIndex = trashes.findIndex((trash) => trash.id === id);
    trashes[currentTrashIndex].lastTakeOutDate = new Date();
  }
}

