export const hanoi  = (disks, from, to, extra) => {
    if (disks > 0) {
        hanoi(disks - 1, from, extra, to);
        console.log(`Move disk ${disks} from post ${from} to post ${to}`);
        hanoi(disks - 1, extra, to, from);
    }
};
