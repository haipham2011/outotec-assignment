import { useState } from 'react';

export const roundNumber = (nominator, denomminator) => {
    if (nominator % denomminator !== 0) {
      return Math.floor(nominator / denomminator) + 1;
    } else {
      return Math.floor(nominator / denomminator);
    }
};

export const sortDate = (objects, type) => {
    const result = objects.sort((a,b) => {
        const [aDate, aClock] = a.created.split(" ");
        const [bDate, bClock] = b.created.split(" ");
        const [aHour, aMinute] = aClock.split(":");
        const [bHour, bMinute] = bClock.split(":");
        const [aDay, aMonth, aYear] = aDate.split(".")
        const [bDay, bMonth, bYear] = bDate.split(".")
        return new Date(`${aYear}-${aMonth}-${aDay}T${aHour}:${aMinute}:00`) - new Date(`${bYear}-${bMonth}-${bDay}T${bHour}:${bMinute}:00`);
      });

    if(type === "desc"){
        return result.reverse()
    }
    else{
        return result
    }
}

export const sortObjects = (objects, sort) => {
    //field : Name or ID
    //type: ascending or descending
    const [field , type] = sort.split("-"); 
    const compare = (a,b) => {
      const aField =  a[field].toString().toLowerCase();
      const bField =  b[field].toString().toLowerCase();

      if( type === 'asc'){
        return (aField > bField) ? 1 : ((bField > aField) ? -1 : 0) 
      }
      else {
        return (aField > bField) ? -1 : ((bField > aField) ? 1 : 0)
      }
    };

    if(field === "created"){
        return sortDate(objects, type)
    }
    else{
        return objects.sort(compare);
    }
}

export const usePage = (maxNumberOfPage, totalPage) => {
    const [page, setPage] = useState(1);
    const [bound, setBound] = useState([1, maxNumberOfPage]);

    const pageBoundCal = pageInput => {
        const pos = roundNumber(pageInput, maxNumberOfPage);
        const min = maxNumberOfPage * (pos - 1) + 1;
        const max =
          min + maxNumberOfPage - 1 > totalPage
            ? totalPage
            : min + maxNumberOfPage - 1;
        setPage(pageInput);
        setBound([min, max]);
      };

    return {page, bound, pageBoundCal}
}