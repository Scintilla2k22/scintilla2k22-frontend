import {AiOutlineStar} from 'react-icons/ai'


export const asset  =  process.env.PUBLIC_URL


export const getDate = (s) =>  {

    let x = new Date(s);
    
    let nx = x.toDateString()

    return nx;
}

export const comparator = (a, b) => {

    return a.score < b.score;

}

function binary_search(arr, target){
    
    let i =0, j=arr.length;

    while(i <= j){
        let mid = Math.floor((i + j)/2);

        if(arr[mid] > target){
            i = mid + 1;
        }else
        if(arr[mid] < target){
            j = mid - 1;
        }else
        return mid;
    }
    return -1;
}

const badges = {

    0 :  <AiOutlineStar style = {{ color : "var(--gold_badge)" , fontSize : "20px"}} />,
    1 : <AiOutlineStar style = {{ color : "var(--silver_badge)"  , fontSize : "20px"}} />,
    2 : <AiOutlineStar style =  {{ color : "var(--bronze_badge)" , fontSize : "20px" }} />
  }

export const ranking = (obj) => {

    const rankSet = new Set()
    
    obj.forEach(ele => {
        rankSet.add(ele.score)
    });
    
    const  ranks = Array.from(rankSet);
    ranks.sort( (a,b) => b - a );

    return function getBadge(score){

        let index = binary_search(ranks, score);

        console.log("ranks : ", ranks, index, score)

        if( score && index != -1 && index <= 2){
            
                return badges[index];        
        }


        return "";
    }

    


}