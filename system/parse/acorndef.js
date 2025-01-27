/* DreemGL is a collaboration between Teeming Society & Samsung Electronics, sponsored by Samsung and others.
   Copyright 2015-2016 Teeming Society. Licensed under the Apache License, Version 2.0 (the "License"); You may not use this file except in compliance with the License.
   You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing,
   software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and limitations under the License.*/
// Acorn AST structure definition

define({
	Program:{ body:2 },
	BinaryExpression:{left:1, right:1, operator:0},
	ExpressionStatement:{expression:1},
	MemberExpression:{object:1, property:1, computed:0},
	CallExpression:{callee:1, arguments:2},
	LogicalExpression:{left:1, right:1, operator:0},
	BinaryExpression:{left:1, right:1, operator:0},
	Identifier:{name:0},
	Literal:{raw:0, value:0},
	ThisExpression:{},
	AssignmentExpression: {left:1, right:1},
	FunctionDeclaration: {id:1, params:2, body:1},
	BlockStatement:{body:2},
	VariableDeclaration:{declarations:2, kind:0},
	VariableDeclarator:{id:1, init:1},
	FunctionExpression:{id:1, params:2},
	ObjectExpression:{properties:3},
	ArrayExpression:{elements:2},
	NewExpression:{callee:1, arguments:2},
	ConditionalExpression:{test:1, consequent:1, alternate:1},
	UpdateExpression:{operator:0, prefix:0, argument:1},
	SwitchStatement:{discriminant:1, cases:2},
	SwitchCase:{test:1, consequent:1},
	ReturnStatement:{argument:1},
	ThrowStatement:{argument:1},
	TryStatement:{block:1, handlers:2, finalizer:1},
	CatchClause:{param:1, guard:1, body:1},
	AwaitExpression:{argument:1},
	UnaryExpression:{operator:0, prefix:0, argument:1},
	IfStatement:{test:1, consequent:1},
	ForStatement:{init:1, test:1, update:1, body:1},
	EmptyStatement:{}
})