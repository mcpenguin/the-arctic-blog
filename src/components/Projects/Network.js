import { Component } from 'react';
import Graph from 'react-graph-vis';
import make_color from './color-helper';
import './Network.css';

// make node object with max number maxNo
// with index in the nodeList and length of nodeList
function makeNode(num, index, length) {
    return {
        id: num,
        label: `${num}`,
        size: 10,
        shape: "dot",
        font: {
            face: 'nunito',
            align: "center"
        },
        color: make_color((parseInt(index) + 1) / (length + 1), 0.6, 0.99)
    }
}

// make edge object between two numbers
function makeEdge(num1, num2) {
    return {
        id: `${num1}_${num2}`,
        from: num1,
        to: num2,
        arrows: 'to',
        color: "#999999"
    }
}

export default class Network extends Component {

    constructor(props) {
        super(props);
        this.state = {
            graph: {
                nodes: [],
                edges: []
            },
            options: {
                autoResize: true,
                layout: {
                    improvedLayout: true,
                    ...(this.props.hierarchical
                        ? {
                            hierarchical: {
                                enabled: true,
                                sortMethod: 'directed',
                                shakeTowards: 'roots',
                                direction: 'LR',
                                nodeSpacing: 30,
                                levelSeparation: 100,
                            }
                        }
                        : {}
                    ),
                },
                nodes: {
                    font: {
                        multi: 'html',
                    },
                },
                physics: {
                    enabled: true,
                    minVelocity: 0.05,
                    maxVelocity: 50,
                    hierarchicalRepulsion: {
                        centralGravity: 1,
                        nodeDistance: 70,
                    },
                },
            },
            events: {

            },
        }
    }
    componentDidMount() {
        this.makeGraph();
    }

    makeOptions() {
        this.setState(({options, ...rest}) => {
            return {
                options: {
                    autoResize: true,
                    layout: {
                        improvedLayout: true,
                        ...(this.props.isHierarchical
                            ? {
                                hierarchical: {
                                    enabled: true,
                                    sortMethod: 'directed',
                                    shakeTowards: 'roots',
                                    direction: 'LR',
                                    nodeSpacing: 30,
                                    levelSeparation: 100,
                                }
                            }
                            : {}
                        ),
                    },
                    nodes: {
                        font: {
                            multi: 'html',
                        },
                    },
                    physics: {
                        enabled: true,
                        minVelocity: 0.05,
                        maxVelocity: 50,
                        hierarchicalRepulsion: {
                            centralGravity: 1,
                            nodeDistance: 70,
                        },
                    },
                },
                ...rest
            }
        })
    }

    // get "destination" of number; ie get the value to which
    // the number maps to under rules
    getDestination(num) {
        // "pair" of a and b that corresponds to num
        const pair = this.props.rules[num % this.props.k];
        return pair.a * num + pair.b;
    }
    
    // return "path" for a specific number
    buildPath(num) {
        var result = new Set();
        var cur = num;
        const maxBound = this.props.maxBound;
        while (!result.has(cur) && cur <= maxBound && cur >= -maxBound) {
            result.add(cur);
            cur = this.getDestination(cur);
        }
        return [...result];
    }

    // returns the list of nodes needed for a "closed" graph
    buildTree() {
        // currentList = [1, 2, ..., startNo]
        var currentList = new Set(Array.from(
            { length: this.props.numberOfNodes },
            (v, i) => i + 1
        ));
        // initialize result set
        var result = this.props.numberOfNodes === 1 ? new Set() : new Set([this.props.numberOfNodes]);
        // get max bound
        const maxBound = this.props.maxBound;
        // while current list is not empty (ie graph is still "open")
        while (currentList.size !== 0) {
            // choose a "trailing" element from the currenet list
            var num = [...currentList][0];
            // get its destination according to the rules
            var dest = this.getDestination(num);
            // if destination is already in the result, then we know this
            // node "links" up to the graph, and so we can remove it from the
            // current list
            // if destination is 1, then we 'stop' since this is also a
            // desired result
            // if destination exceeds the max bound, then we stop as well to avoid
            // overflow
            if (dest === 1 || result.has(dest) || dest >= maxBound || dest <= -maxBound) {
                currentList.delete(num);
                result.add(num);
            }
            // otherwise, we need to add the new destination to our graph
            else {
                currentList.delete(num);
                currentList.add(dest);
                result.add(dest);
                result.add(num);
            }
        }

        // return list of nodes as an array
        return [...result];
    }

    makeGraph() {
        const nodeList = this.buildTree(this.props.numberOfNodes).sort((a, b) => a - b);
        var nodes = [];
        var edges = [];
        for (let i in nodeList) {
            const e = nodeList[i];
            nodes.push(makeNode(e, i, nodeList.length));
            edges.push(makeEdge(e, this.getDestination(e)));
        }

        this.setState(({ graph, ...rest }) => {
            return {
                graph: {
                    nodes: nodes,
                    edges: edges
                },
                ...rest
            }
        })
    }

    render() {
        return (
            <Graph
                key={Math.random()}
                graph={this.state.graph}
                options={this.state.options}
                events={this.state.events}
            />
        )
    }
}